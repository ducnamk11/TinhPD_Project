import  Express  from "express";

const configViewengine = (app) => {
    app.set("view engine", "ejs");
    app.set("views", "./src/views")
}

export default configViewengine;