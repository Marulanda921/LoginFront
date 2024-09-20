import { Component, OnInit, OnDestroy } from '@angular/core';
import { ClientService } from '../../services/client-service.service';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit, OnDestroy {
  clients: any[] = [];
  newClient: any = {};  
  selectedClient: any = null; 
  clientIdToDelete: number | null = null; 
  showAddModal: boolean = false;  
  showEditModal: boolean = false;  
  showDeleteModal: boolean = false;  

  private subscriptions: Subscription = new Subscription();

  constructor(private clientService: ClientService, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadClients(); 
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();  
  }


  loadClients(): void {
    const clientsSubscription = this.clientService.getAllClients().pipe(
      tap(data => this.clients = data)
    ).subscribe(
      null,
      error => {
        console.error('Error fetching clients', error);
      }
    );
    this.subscriptions.add(clientsSubscription);
  }


  openAddClientModal(): void {
    this.newClient = {};
    this.showAddModal = true;
  }


  closeAddClientModal(): void {
    this.showAddModal = false;
  }


  addClient(): void {
    const addClientSubscription = this.clientService.createClient(this.newClient).pipe(
      tap(() => {
        this.loadClients(); 
        this.closeAddClientModal(); 
      })
    ).subscribe(
      null,
      error => {
        console.error('Error creating client', error);
      }
    );
    this.subscriptions.add(addClientSubscription);
  }


  openEditClientModal(client: any): void {
    this.selectedClient = { ...client };
    this.showEditModal = true;
  }

  
  closeEditClientModal(): void {
    this.showEditModal = false;
  }

  
  updateClient(): void {
    if (this.selectedClient) {
      const updateClientSubscription = this.clientService.updateClient(this.selectedClient.id, this.selectedClient).pipe(
        tap(() => {
          this.loadClients(); 
          this.closeEditClientModal(); 
        })
      ).subscribe(
        null,
        error => {
          console.error('Error updating client', error);
        }
      );
      this.subscriptions.add(updateClientSubscription);
    }
  }


  openDeleteClientModal(id: number): void {
    this.clientIdToDelete = id;
    this.showDeleteModal = true;
  }

 
  closeDeleteClientModal(): void {
    this.showDeleteModal = false;
  }

 
  confirmDeleteClient(): void {
    if (this.clientIdToDelete !== null) {
      const deleteClientSubscription = this.clientService.deleteClient(this.clientIdToDelete).pipe(
        tap(() => {
          this.loadClients(); 
          this.closeDeleteClientModal();
        })
      ).subscribe(
        null,
        error => {
          console.error('Error deleting client', error);
        }
      );
      this.subscriptions.add(deleteClientSubscription);
    }
  }

  logout(): void {
    this.authService.logout(); 
  }
  

}
