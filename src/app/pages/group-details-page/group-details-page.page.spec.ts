import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GroupDetailsPagePage } from './group-details-page.page';

describe('GroupDetailsPagePage', () => {
  let component: GroupDetailsPagePage;
  let fixture: ComponentFixture<GroupDetailsPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GroupDetailsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
