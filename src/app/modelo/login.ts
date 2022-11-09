

export interface Usuario {
  userName: string;
  mail: string;
  fristName:string;
  lastName:string;
  gender:string;
  token:string;
  password: string;
}

export interface UsuarioId extends Usuario{
idUsuario?: number;
}
