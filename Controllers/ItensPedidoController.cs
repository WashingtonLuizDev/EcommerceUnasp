using EcommerceUnasp.Context;
using EcommerceUnasp.Entity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EcommerceUnasp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ItensPedidoController : Controller
    {
        private EcommerceContext _context = new EcommerceContext();

        [HttpGet("ListarItensPedido/{pedidoId}")]
        public ActionResult<IEnumerable<ItensPedido>> ListarItensPedido(int pedidoId)
        {
            using (_context)
            {
                var listaItensPedido = _context.ItensPedido.Where(w => w.PedidoId.Equals(pedidoId)).ToList();
                
                return Ok(listaItensPedido);
            }
        }

        [HttpGet("{id}")]
        public ActionResult<ItensPedido> GetById(int id)
        {
            using (_context)
            {
                ItensPedido itensPedido = _context.ItensPedido.Where(u => u.Id.Equals(id)).FirstOrDefault();

                if (itensPedido == null)
                    return NotFound();

                return itensPedido;
            }
        }

        [HttpPost]
        public ActionResult<ItensPedido[]> Post(ItensPedido[] itensPedido)
        {
            using (_context)
            {
                foreach (var item in itensPedido)
                {
                    _context.ItensPedido.Add(item);
                }
                
                _context.SaveChanges();
            }
            return itensPedido;
        }

        [HttpPut]
        public ActionResult<ItensPedido> Put(ItensPedido itensPedido)
        {
            using (_context)
            {
                _context.ItensPedido.Update(itensPedido);
                _context.SaveChanges();
            }

            return itensPedido;
        }

        [HttpDelete("RemoverItem/{id}")]
        public bool RemoverItem(int itemPedidoId)
        {
            bool itemRemovido = false;

            using (_context)
            {
                ItensPedido itemPedido = _context.ItensPedido.Where(u => u.Id.Equals(itemPedidoId)).FirstOrDefault();

                if (itemPedido == null)
                    return false;

                _context.ItensPedido.Remove(itemPedido);
                _context.SaveChanges();

                itemRemovido = true;
            }

            return itemRemovido;
        }

    }
}
