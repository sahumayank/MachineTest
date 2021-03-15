import { Component, OnInit } from '@angular/core';
import { EndpointService } from "../endpoint.service"

@Component({
  selector: 'app-master-category',
  templateUrl: './master-category.component.html',
  styleUrls: ['./master-category.component.css']
})
export class MasterCategoryComponent implements OnInit {

  result;
  form = {}
  flag = true
  constructor(private endpoint: EndpointService) {
  }
  ngOnInit() {
    this.search()
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
    this.endpoint.search("MasterCategory/search").subscribe(res => {
      var temp = res["result"]
      this.result = temp["list"]
      this.form["success"] = false

      this.form["message"] = ""
      console.log(this.result)

    })
  }
  save() {
    this.endpoint.save("MasterCategory", this.form).subscribe(res => {
      if (res["success"]) {
        this.form["success"] = res["success"]
        this.form["message"] = "data is save"
      }
    })
  }

  delete(id) {
    this.endpoint.delete("MasterCategory", id).subscribe(res => {
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
