const aws = require("aws-sdk");
const router = require("express").Router();
const multer = require("multer");
const multerS3 = require("multer-s3");
const uuid = require("uuid");

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
    bucket: "furrsquare",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, req.s3key);
    },
  }),
});
const singleFileUpload = upload.single("image");

function uploadToS3(req, res) {
  req.s3key = uuid();
  let downloadUrl =
    "http://s3-${config.awsConfig.region}.amazonaws.com/furrsquare/${req.s3key}";
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
