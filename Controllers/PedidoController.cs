using EcommerceUnasp.Context;
using EcommerceUnasp.Entity;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace EcommerceUnasp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PedidoController : Controller
    {
        private EcommerceContext _context = new EcommerceContext();

        [HttpGet]
        public ActionResult<IEnumerable<Pedido>> Get()
        {
            using (_context)
            {
                return Ok(_context.Pedidos.ToList());
            }
        }

        [HttpGet("{id}")]
        public ActionResult<Pedido> GetById(int id)
        {
            using (_context)
            {
                Pedido user = _context.Pedidos.Where(u => u.Id.Equals(id)).FirstOrDefault();

                if (user == null)
                    return NotFound();

                return user;
            }
        }

        [HttpPost]
        public ActionResult<Pedido> Post(Pedido pedido)
        {
            using (_context)
            {
                pedido.IsAtivo = true;
                _context.Pedidos.Add(pedido);
                _context.SaveChanges();
            }
            return pedido;
        }

        [HttpPut]
        public ActionResult<Pedido> Put(Pedido pedido)
        {
            using (_context)
            {
                _context.Pedidos.Update(pedido);
                _context.SaveChanges();
            }

            return pedido;
        }

        [HttpPut("DesativarPedido/{id}")]
        public bool DesativarPedido(int id) {

            bool pedidoDesativado = false;
            
            using (_context)
            {
                Pedido pedido = _context.Pedidos.Where(u => u.Id.Equals(id)).FirstOrDefault();

                if (pedido == null)
                    return false;

                pedido.IsAtivo = false;
                _context.Pedidos.Update(pedido);
                _context.SaveChanges();

                pedidoDesativado = pedido.IsAtivo;
            }

            return pedidoDesativado;
        }

        [HttpPut("AtivarPedido/{id}")]
        public bool AtivarPedido(int id)
        {

            bool pedidoAtivado = false;

            using (_context)
            {
                Pedido pedido = _context.Pedidos.Where(u => u.Id.Equals(id)).FirstOrDefault();

                if (pedido == null)
                    return false;

                pedido.IsAtivo = true;
                _context.Pedidos.Update(pedido);
                _context.SaveChanges();

                pedidoAtivado = pedido.IsAtivo;
            }

            return pedidoAtivado;
        }

        [HttpPut("FinalizarPedido/{id}")]
        public bool FianalizarPedido(int id)
        {

            bool pedidoFinalizado = false;

            using (_context)
            {
                Pedido pedido = _context.Pedidos.Where(u => u.Id.Equals(id)).FirstOrDefault();

                if (pedido == null)
                    return false;

                pedido.IsFinalizado = true;
                _context.Pedidos.Update(pedido);
                _context.SaveChanges();

                pedidoFinalizado = pedido.IsFinalizado;
            }

            return pedidoFinalizado;
        }
    }
}
