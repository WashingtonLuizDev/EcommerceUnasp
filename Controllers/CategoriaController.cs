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
    public class CategoriaController : ControllerBase
    {
        private EcommerceContext _context = new EcommerceContext();

        [HttpGet]
        public ActionResult<IEnumerable<Categoria>> Get()
        {
            using (_context)
            {
                return Ok(_context.Categorias.ToList());
            }
        }

        [HttpGet("{id}")]
        public ActionResult<Categoria> GetById(int id)
        {
            using (_context)
            {
                Categoria user = _context.Categorias.Where(u => u.Id.Equals(id)).FirstOrDefault();

                if (user == null)
                    return NotFound();

                return user;
            }
        }

        [HttpPost]
        public ActionResult<Categoria> Post(Categoria categoria)
        {
            using (_context)
            {
                _context.Categorias.Add(categoria);
                _context.SaveChanges();
            }
            return categoria;
        }

        [HttpPut]
        public ActionResult<Categoria> Put(Categoria categoria)
        {
            using (_context)
            {
                _context.Categorias.Update(categoria);
                _context.SaveChanges();
            }
            return categoria;
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            using(_context)
            {
                Categoria categoria = _context.Categorias.Where(u => u.Id.Equals(id)).FirstOrDefault();

                if (categoria == null)
                    return NotFound();

                _context.Categorias.Remove(categoria);
                _context.SaveChanges();
            }
            return Ok();
        }
    }
}