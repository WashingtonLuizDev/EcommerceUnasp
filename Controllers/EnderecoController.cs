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
    public class EnderecoController : ControllerBase
    {
        private EcommerceContext _context = new EcommerceContext();

        [HttpGet]
        public ActionResult<IEnumerable<Endereco>> Get()
        {
            using (_context)
            {
                return Ok(_context.Enderecos.ToList());
            }
        }

        [HttpGet("{id}")]
        public ActionResult<Endereco> GetById(int id)
        {
            using (_context)
            {
                Endereco user = _context.Enderecos.Where(u => u.Id.Equals(id)).FirstOrDefault();

                if (user == null)
                    return NotFound();

                return user;
            }
        }

        [HttpPost]
        public ActionResult<Endereco> Post(Endereco endereco)
        {
            using (_context)
            {
                _context.Enderecos.Add(endereco);
                _context.SaveChanges();
            }
            return endereco;
        }
        [HttpPut]
        public ActionResult<Endereco> Put(Endereco endereco)
        {
            using (_context)
            {
                _context.Enderecos.Update(endereco);
                _context.SaveChanges();
            }
            return endereco;
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            using (_context)
            {
                Endereco endereco = _context.Enderecos.Where(u => u.Id.Equals(id)).FirstOrDefault();

                if (endereco == null)
                    return NotFound();

                _context.Enderecos.Remove(endereco);
                _context.SaveChanges();
            }
            return Ok();
        }
    }
}
