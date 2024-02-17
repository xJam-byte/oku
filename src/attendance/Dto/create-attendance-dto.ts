export class CreateAttendanceDto {
  readonly scheduleId: number;
  readonly studentId: number;
  readonly absence_date: Date;
  readonly reason_for_absence: string;
  readonly attendance_status: string;
}
