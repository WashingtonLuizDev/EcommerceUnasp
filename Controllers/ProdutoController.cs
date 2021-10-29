using EcommerceUnasp.Context;
using EcommerceUnasp.Entity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EcommerceUnasp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProdutoController : ControllerBase
    {
        private EcommerceContext _context = new EcommerceContext();

        [HttpGet]
        public ActionResult<IEnumerable<Produto>> Get()
        {
            using (_context)
            {
                return Ok(_context.Produtos.ToList());
            }
        }

        [HttpGet("{id}")]
        public ActionResult<Produto> GetById(int id)
        {
            using (_context)
            {
                Produto user = _context.Produtos.Where(u => u.Id.Equals(id)).FirstOrDefault();

                if (user == null)
                    return NotFound();

                return user;
            }
        }

        [HttpPost]
        public ActionResult<Produto> Post(Produto produto)
        {
            using (_context)
            {
                _context.Produtos.Add(produto);
                _context.SaveChanges();
            }
            return produto;
        }

        [HttpPut]
        public ActionResult<Produto> Put(Produto produto)
        {
            using (_context)
            {
                _context.Produtos.Update(produto);
                _context.SaveChanges();
            }
            return produto;
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            using (_context)
            {
                Produto produto = _context.Produtos.Where(u => u.Id.Equals(id)).FirstOrDefault();

                if (produto == null)
                    return NotFound();

                _context.Produtos.Remove(produto);
                _context.SaveChanges();
            }
            return Ok();
        }
    }

}