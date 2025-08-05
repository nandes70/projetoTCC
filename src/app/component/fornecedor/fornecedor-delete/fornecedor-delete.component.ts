import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../fornecedor.model';
import { FornecedorService } from '../fornecedor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fornecedor-delete',
  templateUrl: './fornecedor-delete.component.html',
  styleUrls: ['./fornecedor-delete.component.css']
})
export class FornecedorDeleteComponent implements OnInit {

  fornecedor!: Fornecedor;
  isLoading: boolean = true;

  constructor(
    private fornecedorService: FornecedorService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fornecedorService.readById(id).subscribe((fornecedor) => {
        this.fornecedor = fornecedor;
        this.isLoading = false;
      });
    }
  }

  deleteFornecedor(): void {
    if (this.fornecedor && this.fornecedor.forId) {
      this.fornecedorService.delete(this.fornecedor.forId).subscribe(() => {
        this.fornecedorService.showMessage('✅Fornecedor excluído com sucesso!');
        this.router.navigate(['/fornecedor']);
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/fornecedor']);
  }
}
