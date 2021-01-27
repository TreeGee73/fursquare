const aws = require("aws-sdk");
const router = require("express").Router();
const multer = require("multer");
const multerS3 = require("multer-s3");
const { v4: uuid } = require("uuid");

const { AWS_SECRET, AWS_ACCESS_KEY, AWS_REGION } = process.env;

aws.config.update({
  secretAccessKey: AWS_SECRET,
  accessKeyId: AWS_ACCESS_KEY,
  region: AWS_REGION,
});
const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "furrrsquare",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, { originalname }, cb) {
      const extension = originalname.split(".").pop();
      cb(null, `${req.s3key}.${extension}`);
    },
  }),
});
const singleFileUpload = upload.single("image");

function uploadToS3(req, res) {
  req.s3key = uuid();
  let downloadUrl = `http://s3-${AWS_REGION}.amazonaws.com/furrrsquare/${req.s3key}`;
  return new Promise((resolve, reject) => {
    return singleFileUpload(req, res, (err) => {
      if (err) return reject(err);
      return resolve(downloadUrl);
    });
  });
}

router.post("/upload", function (req, res) {
  uploadToS3(req, res)
    .then((downloadUrl) => {
      const { location } = req.file;
      // the location variable above stores the url for the uploaded image
      // You will need to take the location an store this in your Database.
      //     db.update({
      //         TableName: "users",
      //     id: userId,
      //     profileThumbnailUrl: downloadUrl
      // }).then(()=> res.status(200).send({ downloadUrl }))
      return res.status(200).send({ downloadUrl });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
