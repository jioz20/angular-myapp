import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  newEn : string;
  newVn : string;
  controllerForm = false;
  filterStatus : string = "TAT_CA";
  
  arrWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
  ];


  constructor() { }

  ngOnInit() {
  }

  showFilterStatus(memorized: boolean)
  {
    const XemTatCa = this.filterStatus === "TAT_CA";
    const DaHoc = this.filterStatus === "DA_HOC" && memorized;
    const ChuaHoc = this.filterStatus === "CHUA_HOC" && !memorized;
    return XemTatCa || DaHoc || ChuaHoc;
  }

  addWord()
  {
    this.arrWords.push({
      id: this.arrWords.length + 1,
      en: this.newEn,
      vn: this.newVn,
      memorized: false
    })
    this.newEn = '';
    this.newVn = '';
    this.controllerForm = false;
  }

  removeWord(id: number)
  {
    const index = this.arrWords.findIndex(word => word.id === id);
    this.arrWords.splice(index, 1);
  }
}
