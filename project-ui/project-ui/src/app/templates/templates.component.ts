import { Component } from '@angular/core';
import { CategoryData, Subcategory, Category } from '../category.model';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css'],
})
export class TemplatesComponent {
  searchText = '';
  private categoryData = {
    archived: [
      {
        id: 142,
        name: 'Family Law',
        status: 'published',
        createdAt: '2023-09-13T11:44:26.689Z',
        updatedAt: '2023-09-13T11:44:26.689Z',
        industry_id: null,
        subcategories: [
          {
            id: 183,
            name: 'Child Custody',
            status: 'archived',
            createdAt: '2023-09-13T11:44:35.339Z',
            updatedAt: '2023-09-13T12:02:24.425Z',
            category_id: 142,
          },
        ],
      },
      {
        id: 143,
        name: 'Healthcare and Medical Law',
        status: 'published',
        createdAt: '2023-09-13T12:00:45.672Z',
        updatedAt: '2023-09-13T12:00:45.672Z',

        subcategories: [
          {
            id: 187,
            name: 'Medical Ethics',
            status: 'archived',
            createdAt: '2023-09-13T12:01:01.004Z',
            updatedAt: '2023-09-13T12:02:18.549Z',
            category_id: 143,
          },
          {
            id: 186,
            name: 'Health Insurance',
            status: 'archived',
            createdAt: '2023-09-13T12:00:56.011Z',
            updatedAt: '2023-09-13T12:02:20.450Z',
            category_id: 143,
          },
        ],
      },
      {
        id: 144,
        name: 'Labor and Employment Law',
        status: 'archived',
        createdAt: '2023-09-13T12:01:10.972Z',
        updatedAt: '2023-09-13T12:02:15.578Z',

        subcategories: [
          {
            id: 192,
            name: 'Workplace Harassment',
            status: 'archived',
            createdAt: '2023-09-13T12:01:27.456Z',
            updatedAt: '2023-09-13T12:02:15.582Z',
            category_id: 144,
          },
          {
            id: 191,
            name: 'Employee Benefits',
            status: 'archived',
            createdAt: '2023-09-13T12:01:23.591Z',
            updatedAt: '2023-09-13T12:02:15.582Z',
            category_id: 144,
          },
          {
            id: 190,
            name: 'Wage and Hour Disputes',
            status: 'archived',
            createdAt: '2023-09-13T12:01:19.418Z',
            updatedAt: '2023-09-13T12:02:15.582Z',
            category_id: 144,
          },
          {
            id: 189,
            name: 'Employment Discrimination',
            status: 'archived',
            createdAt: '2023-09-13T12:01:15.530Z',
            updatedAt: '2023-09-13T12:02:15.582Z',
            category_id: 144,
          },
        ],
      },

      {
        id: 145,
        name: 'International Law',
        status: 'published',
        createdAt: '2023-09-13T12:01:39.685Z',
        updatedAt: '2023-09-13T12:01:39.685Z',
        industry_id: null,
        subcategories: [
          {
            id: 195,
            name: 'Trade Law',
            status: 'archived',
            createdAt: '2023-09-13T12:02:03.069Z',
            updatedAt: '2023-09-13T12:02:10.843Z',
            category_id: 145,
          },
        ],
      },
    ],

    published: [
      {
        id: 138,
        name: 'Civil Law',
        status: 'published',
        createdAt: '2023-09-13T11:42:41.353Z',
        updatedAt: '2023-09-13T11:42:41.353Z',
        subcategories: [
          {
            id: 171,
            name: 'Family Law',
            status: 'published',
            createdAt: '2023-09-13T11:43:00.005Z',
            updatedAt: '2023-09-13T11:43:00.005Z',
            category_id: 138,
          },
          {
            id: 170,
            name: 'Property Law',
            status: 'published',
            createdAt: '2023-09-13T11:42:56.641Z',
            updatedAt: '2023-09-13T11:42:56.641Z',
            category_id: 138,
          },
          {
            id: 169,
            name: 'Torts',
            status: 'published',
            createdAt: '2023-09-13T11:42:51.202Z',
            updatedAt: '2023-09-13T11:42:51.202Z',
            category_id: 138,
          },
          {
            id: 168,
            name: 'Contracts',
            status: 'published',
            createdAt: '2023-09-13T11:42:45.479Z',
            updatedAt: '2023-09-13T11:42:45.479Z',
            category_id: 138,
          },
        ],
      },
      {
        id: 139,
        name: 'Criminal Law',
        status: 'published',
        createdAt: '2023-09-13T11:43:07.421Z',
        updatedAt: '2023-09-13T11:43:07.421Z',
        subcategories: [
          {
            id: 174,
            name: 'Juvenile Crimes',
            status: 'published',
            createdAt: '2023-09-13T11:43:21.620Z',
            updatedAt: '2023-09-13T11:43:21.620Z',
            category_id: 139,
          },
          {
            id: 173,
            name: 'White Collar Crimes',
            status: 'published',
            createdAt: '2023-09-13T11:43:16.808Z',
            updatedAt: '2023-09-13T11:43:16.808Z',
            category_id: 139,
          },
          {
            id: 172,
            name: 'Drug Crimes',
            status: 'published',
            createdAt: '2023-09-13T11:43:11.446Z',
            updatedAt: '2023-09-13T11:43:11.446Z',
            category_id: 139,
          },
        ],
      },
      {
        id: 140,
        name: 'Corporate and Business Law',
        status: 'published',
        createdAt: '2023-09-13T11:43:29.137Z',
        updatedAt: '2023-09-13T11:43:29.137Z',
        subcategories: [
          {
            id: 177,
            name: 'Taxation',
            status: 'published',
            createdAt: '2023-09-13T11:43:43.529Z',
            updatedAt: '2023-09-13T11:43:43.529Z',
            category_id: 140,
          },
          {
            id: 176,
            name: 'Intellectual Property',
            status: 'published',
            createdAt: '2023-09-13T11:43:39.164Z',
            updatedAt: '2023-09-13T11:43:39.164Z',
            category_id: 140,
          },
          {
            id: 175,
            name: 'Mergers and Acquisitions',
            status: 'published',
            createdAt: '2023-09-13T11:43:34.568Z',
            updatedAt: '2023-09-13T11:43:34.568Z',
            category_id: 140,
          },
        ],
      },
      {
        id: 141,
        name: 'Immigration Law',
        status: 'published',
        createdAt: '2023-09-13T11:43:48.945Z',
        updatedAt: '2023-09-13T11:43:48.945Z',
        subcategories: [
          {
            id: 181,
            name: 'Citizenship',
            status: 'published',
            createdAt: '2023-09-13T11:44:16.401Z',
            updatedAt: '2023-09-13T11:44:16.401Z',
            category_id: 141,
          },
          {
            id: 180,
            name: 'Deportation Defense',
            status: 'published',
            createdAt: '2023-09-13T11:44:08.716Z',
            updatedAt: '2023-09-13T11:44:08.716Z',
            category_id: 141,
          },
          {
            id: 179,
            name: 'Green Cards',
            status: 'published',
            createdAt: '2023-09-13T11:44:03.288Z',
            updatedAt: '2023-09-13T11:44:03.288Z',
            category_id: 141,
          },
          {
            id: 178,
            name: 'Visas',
            status: 'published',
            createdAt: '2023-09-13T11:43:53.252Z',
            updatedAt: '2023-09-13T11:43:53.252Z',
            category_id: 141,
          },
        ],
      },
      {
        id: 142,
        name: 'Family Law',
        status: 'published',
        createdAt: '2023-09-13T11:44:26.689Z',
        updatedAt: '2023-09-13T11:44:26.689Z',
        subcategories: [
          {
            id: 184,
            name: 'Alimony/Spousal Support',
            status: 'published',
            createdAt: '2023-09-13T11:44:41.240Z',
            updatedAt: '2023-09-13T11:44:41.240Z',
            category_id: 142,
          },
          {
            id: 182,
            name: 'Divorce',
            status: 'published',
            createdAt: '2023-09-13T11:44:31.164Z',
            updatedAt: '2023-09-13T11:44:31.164Z',
            category_id: 142,
          },
        ],
      },
      {
        id: 143,
        name: 'Healthcare and Medical Law',
        status: 'published',
        createdAt: '2023-09-13T12:00:45.672Z',
        updatedAt: '2023-09-13T12:00:45.672Z',
        subcategories: [
          {
            id: 188,
            name: 'FDA Compliance',
            status: 'published',
            createdAt: '2023-09-13T12:01:04.567Z',
            updatedAt: '2023-09-13T12:01:04.567Z',
            category_id: 143,
          },
          {
            id: 185,
            name: 'Medical Malpractice',
            status: 'published',
            createdAt: '2023-09-13T12:00:51.266Z',
            updatedAt: '2023-09-13T12:00:51.266Z',
            category_id: 143,
          },
        ],
      },
      {
        id: 145,
        name: 'International Law',
        status: 'published',
        createdAt: '2023-09-13T12:01:39.685Z',
        updatedAt: '2023-09-13T12:01:39.685Z',
        subcategories: [
          {
            id: 194,
            name: 'Human Rights',
            status: 'published',
            createdAt: '2023-09-13T12:01:47.412Z',
            updatedAt: '2023-09-13T12:01:47.412Z',
            category_id: 145,
          },
          {
            id: 193,
            name: 'International Business Transactions',
            status: 'published',
            createdAt: '2023-09-13T12:01:43.994Z',
            updatedAt: '2023-09-13T12:01:43.994Z',
            category_id: 145,
          },
        ],
      },
    ],
  };
  sortOptionList = ['Newest First', 'Oldest First', 'A to Z', 'Z to A'];
  selectedOption = 'Newest First';
  categoryList: Subcategory[] = [];
  displayCategoryList: Subcategory[] = [];
  displayItemList: Category[] = [];
  statusDropdown = false;
  itemList: CategoryData = new CategoryData(this.categoryData);
  selectedCategory=""
  ngOnInit() {
    console.log(this.itemList);
    this.displayItemList = this.itemList.published;
    this.displayCategoryList = this.categoryList;
  }
  onDropdownToggle() {
    this.statusDropdown = !this.statusDropdown;
    console.log(this.statusDropdown);
  }
  onCategoryClicked(id: number) {
    this.categoryList =
      this.itemList.published.find((item) => {
        this.selectedCategory = item.name
        return item.id === id
      })?.subcategories ||
      [];
    this.displayCategoryList = this.categoryList;

    this.onOptionClick(this.selectedOption);
  }
  onOptionClick(option: string) {
    if (option === 'Newest First') {
      this.displayItemList.sort((a, b) => {
        return a.createdAt.getTime() - b.createdAt.getTime();
      });
      this.displayCategoryList.sort((a, b) => {
        return a.createdAt.getTime() - b.createdAt.getTime();
      });
    } else if (option === 'Oldest First') {
      this.displayItemList.sort((a, b) => {
        return b.createdAt.getTime() - a.createdAt.getTime();
      });
      this.displayCategoryList.sort((a, b) => {
        return b.createdAt.getTime() - a.createdAt.getTime();
      });
    } else if (option === 'A to Z') {
      this.displayItemList.sort((a, b) => {
        return a.name > b.name ? 1 : -1;
      });
      this.displayCategoryList.sort((a, b) => {
        return a.name > b.name ? 1 : -1;
      });
    } else {
      this.displayItemList.sort((a, b) => {
        return b.name > a.name ? 1 : -1;
      });
      this.displayCategoryList.sort((a, b) => {
        return b.name > a.name ? 1 : -1;
      });
      console.log(this.categoryList);
    }
    this.selectedOption = option;
    this.displayCategoryList = [...this.displayCategoryList];
    console.log(this.selectedOption);
  }
  filterItems() {
    if (this.searchText === '') {
      this.displayCategoryList = this.categoryList;
      this.displayItemList = this.itemList.published
    } else {
      var tempList1: Category[] = [];
      var tempList2: Subcategory[] = [];
      this.itemList.published.forEach((element) => {
        if (
          element.name.toLowerCase().includes(this.searchText.toLowerCase())
        ) {
          tempList1.push(element);
        }
      });
      this.itemList.published.forEach((element) => {
        element.subcategories.forEach((element) => {
          if (
            element.name.toLowerCase().includes(this.searchText.toLowerCase())
          ) {
            tempList2.push(element);
          }
        });
      });
      console.log(tempList1, tempList2, this.searchText);
      this.displayCategoryList = tempList2;
      this.displayItemList = tempList1;
    }
  }
}
