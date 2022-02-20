import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-session-selection',
  templateUrl: './session-selection.component.html',
  styleUrls: ['./session-selection.component.scss']
})
export class SessionSelectionComponent implements OnInit {
  images: string[] = [
    "https://firebasestorage.googleapis.com/v0/b/kirirom-forum-chatbot.appspot.com/o/session%2FA07%EF%BC%9A%E3%82%B5%E3%82%B9%E3%83%86%E3%83%8A%E3%83%96%E3%83%AB%E6%8A%95%E8%B3%87%E3%80%82%E2%80%9D%E4%B8%BB%E5%BD%B9%E3%81%AF%E8%AA%B0%EF%BC%9F%E3%82%B0%E3%83%AD%E3%83%BC%E3%83%90%E3%83%AB%E4%BC%81%E6%A5%AD%E3%81%AB%E3%81%AA%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AE%E3%83%A9%E3%82%A4%E3%82%BB%E3%83%B3%E3%82%B9.png?alt=media&token=206fb9d7-eb74-4faa-b849-324616940b5c",
    "https://firebasestorage.googleapis.com/v0/b/kirirom-forum-chatbot.appspot.com/o/session%2FA02%EF%BC%9A%E3%83%80%E3%82%A4%E3%83%90%E3%83%BC%E3%82%B7%E3%83%86%E3%82%A3%E3%83%BC%E3%81%A8%E3%82%B0%E3%83%AD%E3%83%BC%E3%83%90%E3%83%AA%E3%82%BC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3.png?alt=media&token=2034cea8-6575-4031-bd60-0e4a8af223b6",
    "https://firebasestorage.googleapis.com/v0/b/kirirom-forum-chatbot.appspot.com/o/session%2FB06%EF%BC%9A%E6%97%A5%E6%9C%AC%E4%BA%BA%E3%81%8C%E6%B5%B7%E5%A4%96%E3%81%AB%E4%BD%8F%E3%82%93%E3%81%A7%E3%83%93%E3%82%B8%E3%83%8D%E3%82%B9%E3%82%92%E3%82%84%E3%82%8B%E5%A0%B4%E5%90%88%E3%81%AE%E8%AA%B2%E9%A1%8C.png?alt=media&token=b6e2dc66-891e-4669-9600-0182ff2a3f5a"
  ];
  data: any;
  likes: string[] = [];
  i = 0;

  constructor(private router: Router, private db: AngularFirestore, private dataService: DataService) {
    // this.images = this.afs.collection('session').valueChanges;
    // this.db.collection('session').get().then(snapshot => console.log(snapshot.docs));

    // colRef = collection(db, 'session');
    // getDocs(colRef).then(docs => console.log(docs));
    this.data = this.db.collection('session').get().subscribe(snapshot => console.log(snapshot.docs));
  }

  ngOnInit(): void {
    console.log(this.images);
  }



  like() {
    // this.likes.push(this.images[this.i]);
    this.dataService.addLikes(this.images[this.i]);
    this.images.splice(this.i, 1);

    if (this.images.length == 0) { this.router.navigate(['result'])}

    console.log(this.images);
    console.log(this.likes);
  }

  dislike() {
    this.images.splice(this.i, 1);

    if (this.images.length == 0) { this.router.navigate(['result'])}

    console.log(this.images);
    console.log(this.likes);
  }
}
