import React from 'react';
import { Button, Container, ListGroup } from 'react-bootstrap';

const TermsAndCondition = () => {
  return (
    <Container>
      <h2>Terms and Conditions</h2>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <strong>Accuracy:</strong> The website will strive to provide accurate and reliable news, but cannot guarantee the accuracy of any information or content provided.
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Intellectual Property:</strong> All content on the website, including text, images, videos, and audio, is protected by copyright and other intellectual property laws. Users may not use or reproduce any content from the website without prior written consent.
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>User-generated Content:</strong> Users may submit content such as comments or user-generated news, but the website reserves the right to remove or edit any such content deemed inappropriate or in violation of these terms and conditions.
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Privacy:</strong> The website will take reasonable measures to protect the privacy of its users, but cannot guarantee the security of any personal information submitted by users.
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Third-Party Links:</strong> The website may contain links to third-party websites, but is not responsible for the content or practices of any such websites.
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Disclaimer:</strong> The website disclaims any liability for any damages or losses arising from the use of the website or reliance on any content or information provided.
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Governing Law:</strong> These terms and conditions are governed by the laws of the jurisdiction in which the website is located, and any disputes arising from them shall be resolved in accordance with those laws.
        </ListGroup.Item>
      </ListGroup>
      <Button variant="link" onClick={() => window.history.back()}>Go back</Button>
    </Container>
  );
};

export default TermsAndCondition;