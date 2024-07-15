import Express from "express";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";
import commentRoutes from "./routes/comments.js";
import likesRoutes from "./routes/likes.js";

const app = express();

const port = process.env.PORT;

console.log(port);

//middleware
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/likes", likesRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/posts", postRoutes);

app.listen(3000, () => {
  console.log("App is running on 3000");
});
