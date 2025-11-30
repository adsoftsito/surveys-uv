import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Admision } from '../models/admision.model';

@Injectable({
  providedIn: 'root'
})
export class AdmisionUvWebService {
  private readonly dbPath = '/admisiones';

  admisionesRef: AngularFirestoreCollection<Admision>;

  constructor(private readonly db: AngularFirestore) {
    this.admisionesRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Admision> {
    return this.admisionesRef;
  }

  getByProgram(programaInteres : string): AngularFirestoreCollection<Admision> {
    //return this.db.collection(this.dbPath, ref => ref.where('programaInteres','==', programaInteres )).valueChanges()
    //return this.testsRef.('programaInteres','==', programaInteres)
    return this.db.collection(this.dbPath, ref => ref.where('programaInteres', '==', programaInteres));
  }

  create(admision: Admision): any {
    return this.admisionesRef.add({ ...admision });
  }

  update(id: string, data: any): Promise<void> {
    return this.admisionesRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.admisionesRef.doc(id).delete();
  }
}