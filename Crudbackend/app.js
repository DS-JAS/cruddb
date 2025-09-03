import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);


app.listen(5000, '0.0.0.0', () => {
  console.log("✅ Server running on port 5000");
});


export default app;
