using EcommerceUnasp.Entity;
using Microsoft.EntityFrameworkCore;

namespace EcommerceUnasp.Context
{
    public class EcommerceContext : DbContext
    {
        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Categoria> Categorias { get; set; }
        public DbSet<Endereco> Enderecos { get; set; }
        public DbSet<Produto> Produtos { get; set; }
        public DbSet<Pedido> Pedidos { get; set; }
        public DbSet<ItensPedido> ItensPedido { get; set; }
        public DbSet<FormaPagamento> FormaPagamentos { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("data source=45.93.100.120,1433;initial catalog=FS01;persist security info=True;user id=FS01;password=25846;MultipleActiveResultSets=True;App=exeEf;");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            
            modelBuilder.Entity<Cliente>(c => c.ToTable("Cliente"));
            modelBuilder.Entity<Categoria>(c => c.ToTable("Categoria"));
            modelBuilder.Entity<Endereco>(c => c.ToTable("Endereco"));
            modelBuilder.Entity<Produto>(c => c.ToTable("Produto"));
            modelBuilder.Entity<Pedido>(c => c.ToTable("Pedido"));
            modelBuilder.Entity<ItensPedido>(c => c.ToTable("ItensPedido"));
            modelBuilder.Entity<FormaPagamento>(c => c.ToTable("FormaPagamento"));
        }
    }
}
