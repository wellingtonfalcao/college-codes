﻿namespace Lambda1.Models {
    public class Conta {
        public int Id { get; set; }
        public string Nome { get; set; }
        public double Saldo { get; set; }

        public Conta(int id, string nome, double saldo) { 
            Id = id;
            Nome = nome;
            Saldo = saldo;
        }

        public override string ToString() {
            return Id + " " + Nome + " " + Saldo;
        }
    }
}
