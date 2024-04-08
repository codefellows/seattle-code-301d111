const mongoose = require('mongoose');

// Schema = Shape of the data
// We don't need an "id" because the database will create one for us.
const dogSchema = new mongoose.Schema({
    name: String,
    color: String,
    breed: String,
    age: Number,
    hasTail: Boolean
});

// Helper function to add some dogs to the database
// Use "statics" which lets us do things like Dog.seed();
// "Seeding" the database
dogSchema.statics.seed = async function() {

    const dog1 = new Dog({
        name: "Trixie",
        color: "Brown",
        breed: "Pitbull",
        age: 3,
        hasTail: true
    });

    await dog1.save();

    await Dog.create({
        name: "Rex",
        color: "Black",
        breed: "Doberman Pinscher",
        age: 5,
        hasTail: false
    }); 

    return "seeded database with 2 dogs";

}

dogSchema.statics.clear = async function() {
    try {
        // Delete "many" dogs that match the {} filter query
        await Dog.deleteMany({});
        return "Cleared the database";
    } catch(e) {
        return e.message;
    }
}


const Dog = mongoose.model('Dog', dogSchema);

module.exports = Dog;
