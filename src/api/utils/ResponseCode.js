const ResponseCode = {
    CONNECTION_ERROR: {
        code: 600, // por definir
        message: "Error en la conexión. Lo sentimos los servicios no estan disponibles"
    },
    CLIENT_ERROR : {
        code: 800,
        message: "Please check your inputs"
    },
    UNDEFINED: {
        code: 404, 
        message: "Por favor trata denuevo"
    },
};

export default ResponseCode;