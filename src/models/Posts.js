import mongoose from "mongoose"; //Difinicion de los valores para la base de datos

const postSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim:true
    },
    apellido: {
      type: String,
      required: true,
      trim:true
    },

    edad: {
      type: Number,
      required: true,
      trim:true
    },

    correo: {
      type: String,
      required:true,
      unique: true,
    },

    curriculum: {
      type: String,
      required: true,
      trim:true
    },

    check: {
      type: Boolean,
      default: false,
    }
  });

export default mongoose.model("Postulantes", postSchema);
