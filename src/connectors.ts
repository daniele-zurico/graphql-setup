// at the top with imports:
import mongoose from 'mongoose';

// somewhere in the middle:
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/graphExample', {
    useMongoClient: true
});




