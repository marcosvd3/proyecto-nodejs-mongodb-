import Postulantes from "../models/Posts.js"; //Trae la manera de guardar los datos desde la carpeta models
//Metodos post y get para manejar los datos 

export const renderPostulacion = async (req, res) => { //Muestra la página principal con los datos si hay
  const posts = await Postulantes.find().lean();
  res.render("index", { posts: posts });
};

export const crearPost = async (req, res) => { //Crea los nuevos postulantes y los guarda 
  try {
    const post = Postulantes(req.body);

    const postSaved = await post.save();
    console.log(postSaved);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};
export const postRenderEdit = async (req, res) => {//Redireccion a la pagina edit y muestra los valores para editar
  try {
    const post = await Postulantes.findById(req.params.id).lean();

    res.render("edit", {post});
  } catch (error) {
    console.log(error.message);
  }
};

export const editarCurriculum = async (req,res)=>{ //Permite editar datos de los postulantes, si necesita modificar algo 

  const { id } = req.params;
  await Postulantes.findByIdAndUpdate(id, req.body);
  res.redirect("/");

}

export const deletePost = async (req, res) => { //Elimina postulantes
  const { id } = req.params;
  await Postulantes.findByIdAndDelete(id);
  res.redirect("/");
};

export const estadoPost = async (req, res) => { //Cambia el estado del postulando, sin revisar a revisado
  const { id } = req.params;

  const esPost = await Postulantes.findById(id);

  esPost.check = !esPost.check;
  await esPost.save();
  res.redirect("/");
};
