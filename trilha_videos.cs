using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
namespace Programeja
{
    #region Trilha_videos
    public class Trilha_videos
    {
        #region Member Variables
        protected int _trilha_videos_id;
        protected int _trilha_id;
        protected int _id_conteudo;
        #endregion
        #region Constructors
        public Trilha_videos() { }
        public Trilha_videos(int trilha_id, int id_conteudo)
        {
            this._trilha_id=trilha_id;
            this._id_conteudo=id_conteudo;
        }
        #endregion
        #region Public Properties
        public virtual int Trilha_videos_id
        {
            get {return _trilha_videos_id;}
            set {_trilha_videos_id=value;}
        }
        public virtual int Trilha_id
        {
            get {return _trilha_id;}
            set {_trilha_id=value;}
        }
        public virtual int Id_conteudo
        {
            get {return _id_conteudo;}
            set {_id_conteudo=value;}
        }
        #endregion
    }
    #endregion
}