using Infnet.Models;
using Microsoft.EntityFrameworkCore;

namespace Infnet.Interfaces {
    public interface IAlunoService {

        public Task<List<Aluno>> GetAllAsynch();
        public Task<List<Aluno>> GetAlunosPorNomeAsynch(string nome);
        public Task<Aluno?> GetAllInformationAsync(int? id);
        public Task<Aluno?> GetAlunoByIdAsync(int? id);
        public Task UpdateAlunoAsync(Aluno aluno);
        public Task DeleteAlunoAsync(int? id);
    }
}
