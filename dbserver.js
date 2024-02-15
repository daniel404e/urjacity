import express from 'express' 
import mongoose from 'mongoose'
import cors from 'cors' 



// Replace the <username>, <password>, and <your-cluster-url> with your actual MongoDB Atlas connection details
const mongoURI = 'mongodb+srv://joshuadaniel404:Joshua12345@cluster0.xhtf01w.mongodb.net/?retryWrites=true&w=majority';



const announcementSchema = new mongoose.Schema({
    imagesrc: {
        type: String,
        required: true,
      },
      announcementUniqueId: {
        type: String,
        required: true,
         unique: true
      },
    title: {
      type: String,
      required: true,
    },
    VendorName: {
      type: String,
      required: true,
    },
    fromdate : {
        type: Date,
       },
    todate : {
     type: Date,
    },
    timeString : {
        type: String,
        required: true,
      },
      ctaCategory : {
        type: String,
        required: true,
      },
      ctaLink : {
        type: String,
        required: true,
      },
      announcementVisiblity:{
        type: Boolean,
        default: true,
      },
    datePosted: {
      type: Date,
      default: Date.now,
    },
  });
  
  const Announcement = mongoose.model('Announcement', announcementSchema);





// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connection established'))
  .catch(err => console.error('MongoDB connection error:', err));

const app = express();
const PORT =   4100;

app.use(express.json()); // Middleware to parse JSON bodies

// To allow requests from all origins
app.use(cors());

// Define a simple route
// Route to get all announcements
app.get('/getallannouncements', async (req, res) => {
    try {
      const announcements = await Announcement.find();
      res.send(announcements);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  


app.post('/addnewannouncements', async (req, res) => {
    try {
        console.log(req.body)
        const touploadData = req.body
        touploadData.announcementUniqueId = `${Math.random().toString(36).substring(2)}${Date.now().toString(36)}`;
        
      const newAnnouncement = new Announcement( touploadData );
      
      const savedAnnouncement = await newAnnouncement.save();
      res.json( savedAnnouncement );
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });


 


  app.post('/editannouncement', async (req, res) => {
    const { announcementUniqueId, updateData } = req.body;

  console.log("Before deletion:", req.body);

  // Correctly delete _id from the nested updateData object
  delete updateData._id;
  delete updateData.__v;
 
  delete updateData.datePosted;

  console.log("After deletion:", updateData);

    if (!announcementUniqueId) {
      return res.status(400).json({ message: "announcementUniqueId is required." });
    }
  
    try {
        const updatedAnnouncement = await Announcement.findOneAndUpdate(
            { announcementUniqueId: announcementUniqueId }, // Use announcementUniqueId to find the document
            { $set: updateData }, // Update only the imagesrc field
            { new: true, runValidators: true } // Options to return the updated document and run validators
          );
      
          if (!updatedAnnouncement) {
            return res.status(404).json({ message: "Announcement not found." });
          }
      
          res.json(updatedAnnouncement);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });


 
  
  


 
  
// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
