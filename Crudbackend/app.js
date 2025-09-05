// import express from 'express';
// import cors from 'cors';
// import userRoutes from './routes/userRoutes.js';

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use('/api/users', userRoutes);


// const PORT = 8080;
// app.listen(PORT, () => {
//   console.log("✅ Server running on port 5000");
// });


// export default app;


import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);

// Cloud Run will inject PORT
const PORT = process.env.PORT || 8080;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on port ${PORT}`);
});

export default app;
