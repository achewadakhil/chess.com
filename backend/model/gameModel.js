import mongoose from "mongoose";
const { Schema } = mongoose;

const moveSchema = new Schema({
    from : {
        type: String,  
        required: true,
    },  
    to : {
        type: String,
        required: true,    
    }
},{ _id : false });

const playerSchema = new Schema({
    userId : {
        type: String,
        required: true,
    },
    timeRemaining : {
        type: Number,
        required : true
    }
},{ _id : false});

const gameSchema = new Schema ({
    //let player1 be white and player2 be black
    players : {
        white : playerSchema,
        black : playerSchema
    },
    gameId : {
        type : String,
        required : true,
    },
    moves : [moveSchema],
    status : {
        type : String,
        enum : ["ongoing", "completed", "abandoned"],
        default : "ongoing",
    }
});

const gameModel = mongoose.model("Game", gameSchema);
export default gameModel;