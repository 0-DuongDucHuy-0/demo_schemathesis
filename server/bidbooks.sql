-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th5 05, 2024 lúc 04:11 PM
-- Phiên bản máy phục vụ: 10.4.32-MariaDB
-- Phiên bản PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `bidbooks`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `auctions`
--

CREATE TABLE `auctions` (
  `auction_id` int(11) NOT NULL,
  `book_id` int(11) DEFAULT NULL,
  `start_time` datetime DEFAULT NULL,
  `end_time` datetime DEFAULT NULL,
  `status` text DEFAULT NULL,
  `winner_id` int(11) DEFAULT NULL,
  `start_price` int(11) NOT NULL,
  `step` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `auctions`
--

INSERT INTO `auctions` (`auction_id`, `book_id`, `start_time`, `end_time`, `status`, `winner_id`, `start_price`, `step`) VALUES
(1, 1, '2024-04-05 20:00:00', '2024-04-07 20:00:00', 'Đang diễn ra', NULL, 20000, 5000);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `bids`
--

CREATE TABLE `bids` (
  `bid_id` int(11) NOT NULL,
  `auction_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `bid_price` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `books`
--

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `title` text DEFAULT NULL,
  `author` text DEFAULT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `books`
--

INSERT INTO `books` (`id`, `title`, `author`, `description`) VALUES
(1, 'Doraemon', 'Fujio', 'mèo máy');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL,
  `role` text NOT NULL,
  `fullname` text DEFAULT NULL,
  `address` text DEFAULT NULL,
  `email` text DEFAULT NULL,
  `phone_number` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `role`, `fullname`, `address`, `email`, `phone_number`) VALUES
(1, 'guest', 'guest', 'guest', '4', '3', '2', '1'),
(2, 'abc', '$2a$10$Cj13oPJUPrl173CN0Bb.Pe08lcpJ4yZUbtJA7LuqDq/tI1cI1SG1S', 'user', NULL, NULL, NULL, NULL);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `auctions`
--
ALTER TABLE `auctions`
  ADD PRIMARY KEY (`auction_id`);

--
-- Chỉ mục cho bảng `bids`
--
ALTER TABLE `bids`
  ADD PRIMARY KEY (`bid_id`);

--
-- Chỉ mục cho bảng `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `auctions`
--
ALTER TABLE `auctions`
  MODIFY `auction_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `bids`
--
ALTER TABLE `bids`
  MODIFY `bid_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `books`
--
ALTER TABLE `books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
