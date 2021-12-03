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
    public class ClienteController : ControllerBase
    {
        private EcommerceContext _context = new EcommerceContext();

        [HttpGet]
        public ActionResult<IEnumerable<Cliente>> Get()
        {
            using (_context)
            {
                return Ok(_context.Clientes.ToList());
            }
        }

        [HttpGet("{id}")]
        public ActionResult<Cliente> GetById(int id)
        {
            using (_context)
            {
                Cliente user = _context.Clientes.Where(u => u.Id.Equals(id)).FirstOrDefault();

                if (user == null)
                    return NotFound();

                return user;
            }
        }

        [HttpPost]
        public ActionResult<Cliente> Post(Cliente cliente)
        {
            using (_context)
            {
                _context.Clientes.Add(cliente);
                _context.SaveChanges();
            }
            return cliente;
        }

        [HttpPost("Login")]

        public ActionResult<Cliente> Login(Cliente cliente)
        {
            using (_context)
            {
                Cliente user = _context.Clientes.Where(u => 
                    u.Email.Equals(cliente.Email)
                    && u.Senha.Equals(cliente.Senha)
                ).FirstOrDefault();

                if (user == null)
                    return NotFound();
                else
                    user.Senha = "";
                    return Ok(user);
            }
        }

        [HttpPut]
        public ActionResult<Cliente> Put(Cliente cliente)
        {
            using (_context)
            {
                _context.Clientes.Update(cliente);
                _context.SaveChanges();
            }

            return cliente;
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            using (_context)
            {
                Cliente cliente = _context.Clientes.Where(u => u.Id.Equals(id)).FirstOrDefault();

               if (cliente == null)
                    return NotFound();

                _context.Clientes.Remove(cliente);
                _context.SaveChanges();
            }

            return Ok();
        }
    }
}
