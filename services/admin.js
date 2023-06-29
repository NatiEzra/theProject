const multer = require('multer');
const path = require('path');
const Item = require('../models/Item');

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, '../public/Images')); // Absolute path to save the uploaded images
    //cb(null,'../public/test'); // Absolute path to save the uploaded images

  },
  filename: (req, file, cb) => {
    const fileName = file.originalname;
    cb(null, fileName);
  },
});

// File filter configuration
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Only jpeg, jpg, png, and gif image files are allowed.'));
  }
};

// Multer upload instance
const upload = multer({ storage: storage, fileFilter: fileFilter }).single('single_input');;

async function AddItem(req, res, name, type, gender, price, details, singleInput) {
  try {
    await upload(req, res, async (err) => {
      if (err) {
        throw new Error(err.message);
      } else {
        const item = new Item({
          name: name,
          type: type,
          gender: gender,
          price: price,
          details: details,
          img: singleInput, // Save the filename in the database
        });
        await item.save();
        console.log('Item saved successfully.');
      }
    })
  } catch (error) {
    console.error('Error occurred while adding item:', error);
  }
}

module.exports = { AddItem };