const util = require('util');
const multer = require('multer');
const crypto = require('crypto');
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    crypto.randomBytes(16, (err, hash) => {
      if (err) cb(err);
      const fileName = `${hash.toString('hex')}-${file.originalname}`;
      file.key = fileName;
      cb(null, fileName);
    });
  },
});
const s3 = multerS3({
  s3: new aws.S3(),
  bucket: process.env.BUCKET_NAME,
  contentType: multerS3.AUTO_CONTENT_TYPE,
  acl: 'public-read',
  key: (req, file, cb) => {
    crypto.randomBytes(16, (err, hash) => {
      if (err) cb(err);

      const fileName = `${hash.toString('hex')}-${file.originalname}`;

      cb(null, fileName);
    });
  },
});

// Filter to accept only GLB files
const fileFilter = (req, file, cb) => {
  if (
    (file.mimetype === 'model/gltf-binary' ||
      file.mimetype === 'application/octet-stream') &&
    file.originalname.endsWith('.glb')
  ) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only GLB files are allowed.'), false);
  }
};

const storageTypes = { local: storage, s3 };

const upload = multer({ storage: storageTypes['s3'], fileFilter });

module.exports = upload;
