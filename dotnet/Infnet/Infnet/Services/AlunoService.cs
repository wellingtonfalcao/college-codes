using Infnet.Data;
using Infnet.Interfaces;
using Infnet.Models;
using Microsoft.EntityFrameworkCore;

namespace Infnet.Sercices {
    public class AlunoService : IAlunoService {

        private readonly InfnetDbContext _context;

        public AlunoService(InfnetDbContext context) {
            _context = context;
        }

        public async Task<List<Aluno>> GetAllAsynch() {
            //return await _context.Alunos.ToListAsync();
            return await _context.Alunos.Where(a => a.DeleteAt == null).ToListAsync();
        }

        public async Task<List<Aluno>> GetAlunosPorNomeAsynch(string nome) {
            //return await _context.Alunos.Where(a => a.Nome.Contains(nome)).ToListAsync();
            return await _context.Alunos.Where(p => p.Nome.Contains(nome))
                .Where(a => a.DeleteAt == null).ToListAsync();
        }

        public async Task<Aluno?> GetAllInformationAsync(int? id) {
            return await _context.Alunos
                .Include(a => a.Endereco)
                .Include(a => a.Emails)
                .Include(a => a.AlunoDisciplina)
                .ThenInclude(ad => ad.Disciplina)
                .FirstOrDefaultAsync(a => a.Id == id);
        }

        public async Task<Aluno?> GetAlunoByIdAsync(int? id) {
            return await _context.Alunos.FirstOrDefaultAsync(m => m.Id == id);
        }

        public async Task UpdateAlunoAsync(Aluno aluno) {
            _context.Alunos.Update(aluno);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAlunoAsync(int? id) {

            if (id == null) {
                return;
            }
            var aluno = await _context.Alunos.FindAsync(id);
            if (aluno == null) {
                return;
            }
            aluno.DeleteAt = DateTime.UtcNow;
            _context.Update(aluno);
            await _context.SaveChangesAsync();
        }
    }
}
