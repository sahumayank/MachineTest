import { Component, OnInit } from '@angular/core';
import { EndpointService } from "../endpoint.service"
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  preloadData
  result;
  form = {}
  flag = true
  constructor(private endpoint: EndpointService) {
  }
  ngOnInit() {
    this.search()
    this.preload()
  }
  preload() {
    this.endpoint.preload("Product/preload").subscribe(res => {
      this.preloadData = res
      this.form["success"] = false
      this.form["message"] = ""
    })
  }


  close() {
    this.flag = true
    this.search()

  }
  edit(even, data) {
    if (even == "add") {
      this.form = {}
      this.flag = false
    } else {
      this.flag = false
      this.form = data
      this.form["message"] = ""

    }
  }
  search() {
    this.endpoint.search("Product/search").subscribe(res => {
      var temp = res["result"]
      this.result = temp["list"]
      this.form["success"] = false
      this.form["message"] = ""
      console.log(this.result)
    })
  }
  save() {
    this.endpoint.save("Product", this.form).subscribe(res => {
      if (res["success"]) {
        this.form["success"] = res["success"]
        this.form["message"] = "data is save"
      }
    })
  }

  delete(id) {
    this.endpoint.delete("Product", id).subscribe(res => {
      if (res["success"]) {
        this.form["success"] = res["success"]
        this.form["message"] = "record is deleted"
      }
      setTimeout(function () {
        this.search()
      }.bind(this), 1000);
    })
  }
}
