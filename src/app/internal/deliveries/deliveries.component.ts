import { Component, OnInit } from '@angular/core';
import { HeaderProfileComponent } from "../../shared/components/header-profile/header-profile.component";
import { HeaderPageComponent } from "../../shared/components/header-page/header-page.component";
import { MaterialModule } from '../../material.module';
import { CommonModule } from '@angular/common';


interface Delivery {
  date: Date;
  time: string;
  name: string;
  status: string;
  photo: string;
}

@Component({
  selector: 'app-deliveries',
  standalone: true,
  imports: [HeaderProfileComponent, HeaderPageComponent, MaterialModule, CommonModule],
  templateUrl: './deliveries.component.html',
  styleUrl: './deliveries.component.scss'
})
export class DeliveriesComponent  implements OnInit {
  selectedDate: Date | null = null;
  weekDays: Date[] = [];
  times: string[] = [
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00'
  ];

  dayNames: string[] = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];

  deliveries: Delivery[] = [
    { date: new Date('2025-01-18'), time: '08:00', name: 'Fernando Reis', status: 'Em andamento', photo: 'https://img.cdndsgni.com/preview/12161378.jpg' },
    { date: new Date('2023-10-01'), time: '12:00', name: 'Maria Silva', status: 'Pendente', photo: 'https://img.cdndsgni.com/preview/12161378.jpg' },
    { date: new Date('2025-01-19'), time: '14:00', name: 'João Santos', status: 'Em andamento', photo: 'https://img.cdndsgni.com/preview/12161378.jpg' },
    { date: new Date('2025-01-19'), time: '08:00', name: 'Fernando Reis', status: 'Em andamento', photo: 'https://img.cdndsgni.com/preview/12161378.jpg' },
    { date: new Date('2025-01-21'), time: '12:00', name: 'Maria Silva', status: 'Pendente', photo: 'https://img.cdndsgni.com/preview/12161378.jpg' },
    { date: new Date('2025-01-21'), time: '14:00', name: 'João Santos', status: 'Em andamento', photo: 'https://img.cdndsgni.com/preview/12161378.jpg' }
  ];

  ngOnInit(): void {
    this.selectedDate = new Date();
    this.calculateWeekDays(this.selectedDate);
    this.addDeliveriesForToday();
  }

  onDateChange(date: Date): void {
    this.selectedDate = date;
    this.calculateWeekDays(date);
  }

  calculateWeekDays(date: Date): void {
    const startOfWeek = this.getStartOfWeek(date);
    this.weekDays = Array.from({ length: 7 }, (_, i) => {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      return day;
    });
  }

  getStartOfWeek(date: Date): Date {
    const day = date.getDay();
    const diff = date.getDate() - day; 
    return new Date(date.setDate(diff));
  }

  onDayClick(day: Date): void {
    this.selectedDate = day;
  }

  isSelectedDay(day: Date): boolean {
    return this.selectedDate?.toDateString() === day.toDateString();
  }

  getDayName(date: Date): string {
    return this.dayNames[date.getDay()];
  }

  getDeliveriesForTime(time: string): Delivery[] {
    return this.deliveries.filter(delivery => delivery.time === time && this.isSameDay(delivery.date, this.selectedDate));
  }

  isSameDay(date1: Date, date2: Date | null): boolean {
    if (!date2) return false;
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
  }

  addDeliveriesForToday(): void {
    const today = new Date();
    this.deliveries.push(
      { date: today, time: '10:00', name: 'Entrega 1', status: 'Confirmado', photo: 'https://img.cdndsgni.com/preview/12161378.jpg' },
      { date: today, time: '14:00', name: 'Entrega 2', status: 'Confirmado', photo: 'https://img.cdndsgni.com/preview/12161378.jpg' }
    );
  }
}