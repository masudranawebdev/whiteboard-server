"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_routes_1 = require("../modules/auth/auth.routes");
const user_routers_1 = require("../modules/user/user.routers");
const service_routes_1 = require("../modules/service/service.routes");
const post_routes_1 = require("../modules/post/post.routes");
const category_routes_1 = require("../modules/category/category.routes");
const banner_routes_1 = require("../modules/banner/banner.routes");
const categorySection_routes_1 = require("../modules/categorySection/categorySection.routes");
const faq_routes_1 = require("../modules/faq/faq.routes");
const categoryHead_routes_1 = require("../modules/categoryHead/categoryHead.routes");
const serviceHead_routes_1 = require("../modules/serviceHead/serviceHead.routes");
const clientHead_routes_1 = require("../modules/clientHead/clientHead.routes");
const teamHead_routes_1 = require("../modules/teamHead/teamHead.routes");
const faqHead_routes_1 = require("../modules/faqHead/faqHead.routes");
const blogHead_routes_1 = require("../modules/blogHead/blogHead.routes");
const video_routes_1 = require("../modules/video/video.routes");
const contact_routes_1 = require("../modules/contact/contact.routes");
const about_routes_1 = require("../modules/about/about.routes");
const review_routes_1 = require("../modules/review/review.routes");
const reviewHead_routes_1 = require("../modules/reviewHead/reviewHead.routes");
const mail_routes_1 = require("../modules/mail/mail.routes");
const traffic_routes_1 = require("../modules/traffic/traffic.routes");
const teamMember_routes_1 = require("../modules/teamMember/teamMember.routes");
const serviceId_routes_1 = require("../modules/serviceId/serviceId.routes");
const movingTips_routes_1 = require("../modules/movingTips/movingTips.routes");
const mission_routes_1 = require("../modules/mission/mission.routes");
const companyTips_routes_1 = require("../modules/companyTips/companyTips.routes");
const quote_routes_1 = require("../modules/quote/quote.routes");
const message_routes_1 = require("../modules/message/message.routes");
const metaHead_routes_1 = require("../modules/metaHead/metaHead.routes");
const socialLink_routes_1 = require("../modules/socialLink/socialLink.routes");
const logo_routes_1 = require("../modules/logo/logo.routes");
const client_routes_1 = require("../modules/client/client.routes");
const area_routes_1 = require("../modules/area/area.routes");
const termAndCondition_routes_1 = require("../modules/termAndCondition/termAndCondition.routes");
const sideMap_routes_1 = require("../modules/sideMap/sideMap.routes");
const privecy_routes_1 = require("../modules/privecy/privecy.routes");
const bannerImg_routes_1 = require("../modules/bannerImg/bannerImg.routes");
const comment_routes_1 = require("../modules/comment/comment.routes");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/auth',
        route: auth_routes_1.AuthRoutes,
    },
    {
        path: '/users',
        route: user_routers_1.UserRoutes,
    },
    {
        path: '/services',
        route: service_routes_1.ServiceRoutes,
    },
    {
        path: '/posts',
        route: post_routes_1.PostRoutes,
    },
    {
        path: '/banners',
        route: banner_routes_1.BannerRoutes,
    },
    {
        path: '/category-sections',
        route: categorySection_routes_1.CategorySectionRoutes,
    },
    {
        path: '/categories',
        route: category_routes_1.CategoryRoutes,
    },
    {
        path: '/faqs',
        route: faq_routes_1.FaqRoutes,
    },
    {
        path: '/category-heads',
        route: categoryHead_routes_1.CategoryHeadRoutes,
    },
    {
        path: '/service-heads',
        route: serviceHead_routes_1.ServiceHeadRoutes,
    },
    {
        path: '/review-heads',
        route: reviewHead_routes_1.ReviewHeadRoutes,
    },
    {
        path: '/client-heads',
        route: clientHead_routes_1.ClientHeadRoutes,
    },
    {
        path: '/team-heads',
        route: teamHead_routes_1.TeamHeadRoutes,
    },
    {
        path: '/faq-heads',
        route: faqHead_routes_1.FaqHeadRoutes,
    },
    {
        path: '/blog-heads',
        route: blogHead_routes_1.BlogHeadRoutes,
    },
    {
        path: '/videos',
        route: video_routes_1.VideoRoutes,
    },
    {
        path: '/contacts',
        route: contact_routes_1.ContactRoutes,
    },
    {
        path: '/abouts',
        route: about_routes_1.AboutRoutes,
    },
    {
        path: '/reviews',
        route: review_routes_1.ReviewRoutes,
    },
    {
        path: '/mails',
        route: mail_routes_1.MailRoutes,
    },
    {
        path: '/traffics',
        route: traffic_routes_1.TrafficRoutes,
    },
    {
        path: '/team-members',
        route: teamMember_routes_1.TeamMemberRoutes,
    },
    {
        path: '/service-ids',
        route: serviceId_routes_1.ServiceIdRoutes,
    },
    {
        path: '/moving-tips',
        route: movingTips_routes_1.MovingTipsRoutes,
    },
    {
        path: '/missions',
        route: mission_routes_1.MissionRoutes,
    },
    {
        path: '/company-tips',
        route: companyTips_routes_1.CompanyTipsRoutes,
    },
    {
        path: '/quotes',
        route: quote_routes_1.QuoteRoutes,
    },
    {
        path: '/messages',
        route: message_routes_1.MessageRoutes,
    },
    {
        path: '/meta-heads',
        route: metaHead_routes_1.MetaHeadRoutes,
    },
    {
        path: '/social-links',
        route: socialLink_routes_1.SocialLinkRoutes,
    },
    {
        path: '/logos',
        route: logo_routes_1.LogoRoutes,
    },
    {
        path: '/clients',
        route: client_routes_1.ClientRoutes,
    },
    {
        path: '/areas',
        route: area_routes_1.AreaRoutes,
    },
    {
        path: '/term-and-conditions',
        route: termAndCondition_routes_1.TermAndConditionRoutes,
    },
    {
        path: '/side-maps',
        route: sideMap_routes_1.SideMapRoutes,
    },
    {
        path: '/privecies',
        route: privecy_routes_1.PrivecyRoutes,
    },
    {
        path: '/banner-images',
        route: bannerImg_routes_1.BannerImgRoutes,
    },
    {
        path: '/comments',
        route: comment_routes_1.CommentRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
