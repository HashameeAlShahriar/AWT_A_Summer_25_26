import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { EnrollmentService } from '../enrollment/enrollment.service';

@Injectable()
export class NotificationService {
  constructor(
    @Inject(forwardRef(() => EnrollmentService))
    private readonly enrollmentService: EnrollmentService,
  ) {}

  sendNotification(studentName: string, message: string) {
    return {
      message: 'Notification sent successfully',
      recipient: studentName,
      content: message,
    };
  }

  checkEnrollmentAndNotify(studentName: string, courseId: string) {
    const { data } = this.enrollmentService.getEnrollments();
    return {
      status: 'Verified',
      student: studentName,
      courseId,
      enrollmentCheck: data,
    };
  }
}