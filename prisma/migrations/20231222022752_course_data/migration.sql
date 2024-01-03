-- AlterTable
ALTER TABLE `Course` ADD COLUMN `coursePhotoUrl` VARCHAR(191) NOT NULL DEFAULT 'No photo url here',
    ADD COLUMN `description` VARCHAR(191) NOT NULL DEFAULT 'no description',
    ADD COLUMN `enrollmentStatus` VARCHAR(191) NOT NULL DEFAULT 'no enrollment status',
    ADD COLUMN `instructor` VARCHAR(191) NOT NULL DEFAULT 'No name',
    ADD COLUMN `location` VARCHAR(191) NOT NULL DEFAULT 'no location',
    ADD COLUMN `schedule` VARCHAR(191) NOT NULL DEFAULT 'no schedule';
