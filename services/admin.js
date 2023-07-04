const multer = require('multer');
const path = require('path');
const Item = require('../models/Item');
const User = require('../models/User');
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
async function Listofusers()
{
  const Users= 
  await User.find();
  return Users;
}

async function updateUser(userId, updatedData) {
    try {
      const user = await User.findByIdAndUpdate(userId, updatedData, { useFindAndModify: false });
      if (!user) {
        throw new Error(`Cannot update user with ID ${userId}. User not found.`);
      }
      console.log('User updated successfully.');
      return user;
    } catch (error) {
      console.error('Error occurred while updating user:', error);
      throw error;
    }
  }

module.exports = { AddItem , Listofusers , updateUser };
