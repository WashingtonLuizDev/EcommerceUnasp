using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EcommerceUnasp.Entity
{
    public class FormaPagamento
    {
        public int Id { get; set; }
        public int PedidoId { get; set; }
        public string Descricao { get; set; }
        public decimal Valor { get; set; }

    }
}
