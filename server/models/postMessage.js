import mongoose from 'mongoose';

// Define the schema for a post message
const postMessageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    creator: {
      type: String,
      // type: mongoose.Schema.Types.ObjectId,
      // ref: 'User',
      required: true,
    },
    selectedFile: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    likeCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true } // Automatically add createdAt and updatedAt timestamps
);

// Create a model from the schema
const PostMessage = mongoose.model('PostMessage', postMessageSchema);

// Export the model
export default PostMessage;
