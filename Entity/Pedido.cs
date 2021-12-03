using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EcommerceUnasp.Entity
{
    public class Pedido
    {
        public int Id { get; set; }
        public int ClienteId { get; set; }
        public bool IsAtivo { get; set; }
        public bool IsFinalizado { get; set; }
        public decimal ValorFrete { get; set; }
        public decimal Valor { get; set; }
    }
}
