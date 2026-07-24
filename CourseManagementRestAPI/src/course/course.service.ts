import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CourseService {
  getAllCourses() {
    return { message: 'successfully', data: [] };
  }

  getCourseById(id: string) {
    return { message: 'successfully', id };
  }

  createCourse(dto: CreateCourseDto) {
    return { message: 'successfullya', data: dto };
  }

  updateCourse(id: string, dto: UpdateCourseDto) {
    return { message: 'successfully', id, data: dto };
  }

  patchCourse(id: string, dto: UpdateCourseDto) {
    const updatedFields = Object.keys(dto);
    return { message: 'patched successfully', id, updatedFields };
  }

  deleteCourse(id: string) {
    return { message: 'deleted successfully', id };
  }

  uploadCourseMaterial(id: string, file:any) {
    if (!file) {
      throw new BadRequestException('File upload failed.');
    }
    return {
      message: 'uploaded successfully',
      courseId: id,
      filename: file.filename,
      path: file.path.replace(/\\/g, '/'), 
    };
  }
}