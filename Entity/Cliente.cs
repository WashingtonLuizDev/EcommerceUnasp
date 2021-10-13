using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EcommerceUnasp.Entity
{
    public class Cliente
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string CPF { get; set; }
        public DateTime? dataNascimento { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public bool isAdministrador { get; set; }
    }
}
