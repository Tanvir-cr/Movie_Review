import dotenv from 'dotenv';
dotenv.config();
import connectDB from '../config/db.js';
import Movie from '../models/Movie.js';
import User from '../models/User.js';

const run = async () => {
  await connectDB();
  await Movie.deleteMany();
  await User.deleteMany();

  const movies = [
    { title: 'The Shawshank Redemption', description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.', releaseYear: 1994, genre: 'Drama' },
    { title: 'Inception', description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea.', releaseYear: 2010, genre: 'Sci-Fi' },
    { title: 'Parasite', description: 'A darkly comedic thriller that explores class conflict after a poor family infiltrates a wealthy household.', releaseYear: 2019, genre: 'Thriller' },
    { title: 'Casablanca', description: 'A cynical expatriate American cafe owner struggles to decide whether to help his former lover and her fugitive husband escape French Morocco.', releaseYear: 1942, genre: 'Romance/Drama' },
    { title: 'Citizen Kane', description: 'Following the death of publishing tycoon Charles Foster Kane, reporters try to decipher the meaning of his final word: "Rosebud."', releaseYear: 1941, genre: 'Drama/Mystery' },
    { title: 'Psycho', description: 'A Phoenix secretary on the run checks into a remote motel run by a young man under the domination of his mother.', releaseYear: 1960, genre: 'Horror/Thriller' },
    { title: 'Lawrence of Arabia', description: 'The story of T.E. Lawrence, the English officer who successfully united and led the diverse, often warring, Arab tribes during World War I.', releaseYear: 1962, genre: 'Adventure/Drama' }
  ];

  await Movie.insertMany(movies);

  const admin = await User.create({ username: 'admin', email: 'admin@example.com', password: 'admin123', isAdmin: true });
  console.log('Seed complete');
  process.exit();
};

run().catch(err => console.error(err));
