using EcommerceUnasp.Context;
using EcommerceUnasp.Entity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EcommerceUnasp.Controllers
{
    public class FormaPagamentoController : Controller
    {
        private EcommerceContext _context = new EcommerceContext();

        [HttpGet("ListarFormasPagamento/{pedidoId}")]
        public ActionResult<IEnumerable<FormaPagamento>> ListarFormasPagamento(int pedidoId)
        {
            using (_context)
            {
                var listaFormaPagamento = _context.FormaPagamentos.Where(w => w.PedidoId.Equals(pedidoId)).ToList();

                return Ok(listaFormaPagamento);
            }
        }

        [HttpGet("{id}")]
        public ActionResult<FormaPagamento> GetById(int id)
        {
            using (_context)
            {
                FormaPagamento formaPagamento = _context.FormaPagamentos.Where(u => u.Id.Equals(id)).FirstOrDefault();

                if (formaPagamento == null)
                    return NotFound();

                return formaPagamento;
            }
        }

        [HttpPost]
        public ActionResult<FormaPagamento> Post(FormaPagamento formaPagamento)
        {
            using (_context)
            {
                _context.FormaPagamentos.Add(formaPagamento);
                _context.SaveChanges();
            }
            return formaPagamento;
        }

        [HttpPut]
        public ActionResult<FormaPagamento> Put(FormaPagamento formaPagamento)
        {
            using (_context)
            {
                _context.FormaPagamentos.Update(formaPagamento);
                _context.SaveChanges();
            }

            return formaPagamento;
        }

        [HttpDelete("RemoverFormaPagamento/{id}")]
        public bool RemoverFormaPagamento(int formaPagamentoId)
        {
            bool formaPagamentoRemovida = false;

            using (_context)
            {
                FormaPagamento formaPagamento = _context.FormaPagamentos.Where(u => u.Id.Equals(formaPagamentoId)).FirstOrDefault();

                if (formaPagamento == null)
                    return false;

                _context.FormaPagamentos.Remove(formaPagamento);
                _context.SaveChanges();

                formaPagamentoRemovida = true;
            }

            return formaPagamentoRemovida;
        }
    }
}
