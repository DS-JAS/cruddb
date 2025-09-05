import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);


const PORT = 8080;
app.listen(PORT, () => {
  console.log("✅ Server running on port 8080");
});


export default app;
