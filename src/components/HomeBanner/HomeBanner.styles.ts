import styled from "styled-components";

export const BannerStyles = styled.div`
    width: 100%;
    
    .swiper-pagination {
    position: initial;
    margin-top: var(--mb-1);
    }

    .swiper-pagination-bullet{
    width: 5px;
    height: 5px;
    background-color: var(--title-color);
    opacity: 1;
    }

    .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{
    margin: 0 .5rem;
    } 

    .swiper-pagination-bullet-active{
    width: 1.5rem;
    height: 5px;
    border-radius: .5rem;
    }
`;